from rest_framework_api_key.models import BaseAPIKeyManager, AbstractAPIKey
from rest_framework_api_key.crypto import KeyGenerator
import typing

def concatenate(left: str, right: str) -> str:
    return "{}.{}".format(left, right)


def split(concatenated: str) -> typing.Tuple[str, str]:
    left, _, right = concatenated.partition(".")
    return left, right

class CustomKeyGenerator(KeyGenerator):
    def generate(self,custom=None) -> typing.Tuple[str, str, str]:
        if custom:
            key = custom
            prefix = custom if len(custom) <= 8 else custom[:8]
        else:
            prefix = self.get_prefix()
            secret_key = self.get_secret_key()
            key = concatenate(prefix, secret_key)
        hashed_key = self.hash(key)
        return key, prefix, hashed_key
class CustomAPIKeyManager(BaseAPIKeyManager):
    key_generator = CustomKeyGenerator(prefix_length=8, secret_key_length=32)
    def assign_key(self, obj: "AbstractAPIKey", custom=None) -> str:
        try:
            key, prefix, hashed_key = self.key_generator.generate(custom)
        except ValueError:  # Compatibility with < 1.4
            generate = typing.cast(
                typing.Callable[[], typing.Tuple[str, str]], self.key_generator.generate
            )
            key, hashed_key = generate()
            pk = hashed_key
            prefix, hashed_key = split(hashed_key)
        else:
            pk = concatenate(prefix, hashed_key)

        obj.id = pk
        obj.prefix = prefix
        obj.hashed_key = hashed_key

        return key

    def create_key(self, custom=None, **kwargs: typing.Any) -> typing.Tuple["AbstractAPIKey", str]:
        # Prevent from manually setting the primary key.
        kwargs.pop("id", None)
        obj = self.model(**kwargs)
        key = self.assign_key(obj,custom)
        obj.save()
        return obj, key