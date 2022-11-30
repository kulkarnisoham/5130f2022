from app import ma
from flask import request
from serializers.baseserializer import BaseSchema
from models.user import User
from marshmallow import fields, validates_schema, ValidationError


class UserSchema(ma.SQLAlchemyAutoSchema, BaseSchema):

    class Meta:
        model = User
        load_instance = True
        exclude = ('password_hash',)
        load_only = ('firstname', 'lastname', 'username',
                     'email', 'usertype', 'password')

    username = fields.String(required=True)
    password = fields.String(required=True)


class PopulateUserSchema(ma.SQLAlchemyAutoSchema, BaseSchema):

    class Meta:
        model = User
        load_instance = True
        exclude = ('password_hash',)
        load_only = ('email', 'password')

    password = fields.String(required=True)

    @validates_schema
    def check_passwords_match(self, data, **kwargs):
        if request.method == 'POST':
            if data['password'] != data['password_confirmation']:
                raise ValidationError(
                    'Passwords do not match',
                    'password_confirmation'
                )
    password_confirmation = fields.String(required=False)
