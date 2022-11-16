"""empty message

Revision ID: 6a1ee15b92d8
Revises: 3f425313e663
Create Date: 2022-11-15 11:07:23.275957

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6a1ee15b92d8'
down_revision = '3f425313e663'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('college_course', sa.Column('professor_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'college_course', 'user', ['professor_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'college_course', type_='foreignkey')
    op.drop_column('college_course', 'professor_id')
    # ### end Alembic commands ###
