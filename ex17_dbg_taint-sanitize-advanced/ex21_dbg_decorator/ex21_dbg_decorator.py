from enum import Enum
from functools import wraps

class PD:
    class Permissions(Enum):
        READ = "read"
        UPDATE = "update"

    permissions = [Permissions.READ, Permissions.UPDATE]

    # Doesn't require authorization as it is not directly exposed
    # ok: ex21_dbg_decorator
    def require_update(func):
        @wraps(func)
        # Doesn't require authorization as it is not directly exposed
        # ok: ex21_dbg_decorator
        def wrapper(*args, **kwargs):
            if not PD.Permissions.UPDATE in PD.permissions:
                raise ValueError("Permission denied")
            return func(*args, **kwargs)

        return wrapper

    # Doesn't require authorization as it is not directly exposed
    # ok: ex21_dbg_decorator
    def require_read(func):
        @wraps(func)
        # Doesn't require authorization as it is not directly exposed
        # ok: ex21_dbg_decorator
        def wrapper(*args, **kwargs):
            if not PD.Permissions.READ in PD.permissions:
                raise ValueError("Permission denied")
            return func(*args, **kwargs)

        return wrapper


class SensitiveFunctions:
    @PD.require_update
    @other_decorator
    # ok: ex21_dbg_decorator
    def update_user_data(user_id, user_name, user_email):
        print(f"User {user_id} updated!")
        # Update user information

    @PD.require_read
    # ok: ex21_dbg_decorator
    def view_user_data(user_id):
        print(f"View user {user_id}!")
        # Update user information

    # ruleid: ex21_dbg_decorator
    def add_user_to_group(user_id, group_id):
        print(f"Add user {user_id} to group {group_id}")
        # Add user to relevant group


class MoreSensitiveFunctions:
    @PD.require_update
    @other_decorator
    # ok: ex21_dbg_decorator
    def update_group_data(group_id, group_name, group_description):
        print(f"Group {group_id} updated!")
        # Update group information

    @PD.require_read
    # ok: ex21_dbg_decorator
    def view_group_data(group_id):
        print(f"View group {group_id}!")
        # Update user information

    @other_decorator
    # ruleid: ex21_dbg_decorator
    def change_group_role(group_id, role_name):
        print(f"Give group {group_id} the role of {role_name}")
        # Change group role


SensitiveFunctions.update_user_data("1", "fred", "fred@bob.com")
SensitiveFunctions.view_user_data("1")
SensitiveFunctions.add_user_to_group("1", "2")

MoreSensitiveFunctions.update_group_data("3", "users", "group with users in")
MoreSensitiveFunctions.view_group_data("3")
MoreSensitiveFunctions.change_group_role("3", "Admins")
