"""requests

Revision ID: a3dd775f7ab5
Revises: 
Create Date: 2022-11-15 11:46:16.489195

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a3dd775f7ab5'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('firstName', sa.String(length=64), nullable=True),
    sa.Column('lastName', sa.String(length=64), nullable=True),
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('is_professor', sa.Boolean(), nullable=True),
    sa.Column('username', sa.String(length=64), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=True),
    sa.Column('password_hash', sa.String(length=128), nullable=True),
    sa.Column('about_me', sa.String(length=140), nullable=True),
    sa.Column('location', sa.String(length=140), nullable=True),
    sa.Column('last_seen', sa.DateTime(), nullable=True),
    sa.Column('verified', sa.Boolean(), nullable=True),
    sa.Column('verified_on', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.create_index(batch_op.f('ix_user_email'), ['email'], unique=True)
        batch_op.create_index(batch_op.f('ix_user_firstName'), ['firstName'], unique=False)
        batch_op.create_index(batch_op.f('ix_user_lastName'), ['lastName'], unique=False)
        batch_op.create_index(batch_op.f('ix_user_username'), ['username'], unique=True)

    op.create_table('college_course',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('course_name', sa.String(length=20), nullable=True),
    sa.Column('professor_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['professor_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('permission_numbers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('permission_number', sa.Integer(), nullable=True),
    sa.Column('Assigned', sa.Boolean(), nullable=True),
    sa.Column('course_name', sa.String(), nullable=True),
    sa.Column('student_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['course_name'], ['college_course.course_name'], ),
    sa.ForeignKeyConstraint(['student_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('permission_numbers', schema=None) as batch_op:
        batch_op.create_index(batch_op.f('ix_permission_numbers_Assigned'), ['Assigned'], unique=False)
        batch_op.create_index(batch_op.f('ix_permission_numbers_course_name'), ['course_name'], unique=False)
        batch_op.create_index(batch_op.f('ix_permission_numbers_student_id'), ['student_id'], unique=False)

    op.create_table('requests',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('status', sa.Boolean(), nullable=True),
    sa.Column('student_id', sa.Integer(), nullable=True),
    sa.Column('course_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['course_id'], ['college_course.id'], ),
    sa.ForeignKeyConstraint(['student_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('requests', schema=None) as batch_op:
        batch_op.create_index(batch_op.f('ix_requests_course_id'), ['course_id'], unique=False)
        batch_op.create_index(batch_op.f('ix_requests_status'), ['status'], unique=False)
        batch_op.create_index(batch_op.f('ix_requests_student_id'), ['student_id'], unique=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('requests', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_requests_student_id'))
        batch_op.drop_index(batch_op.f('ix_requests_status'))
        batch_op.drop_index(batch_op.f('ix_requests_course_id'))

    op.drop_table('requests')
    with op.batch_alter_table('permission_numbers', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_permission_numbers_student_id'))
        batch_op.drop_index(batch_op.f('ix_permission_numbers_course_name'))
        batch_op.drop_index(batch_op.f('ix_permission_numbers_Assigned'))

    op.drop_table('permission_numbers')
    op.drop_table('college_course')
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_user_username'))
        batch_op.drop_index(batch_op.f('ix_user_lastName'))
        batch_op.drop_index(batch_op.f('ix_user_firstName'))
        batch_op.drop_index(batch_op.f('ix_user_email'))

    op.drop_table('user')
    # ### end Alembic commands ###
