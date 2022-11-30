"""added verified

Revision ID: e77f0f6c270c
Revises: c63f35b5f9bf
Create Date: 2022-10-18 15:06:31.984385

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e77f0f6c270c'
down_revision = 'c63f35b5f9bf'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('verified', sa.Boolean(), nullable=False))
    op.add_column('user', sa.Column('verified_on', sa.DateTime(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'verified_on')
    op.drop_column('user', 'verified')
    # ### end Alembic commands ###