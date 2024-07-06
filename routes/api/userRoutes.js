const router = require('express').Router();

const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// http://localhost:3001/api/user
router.route('/').get(getUsers).post(createUser);

// http://localhost:3001/api/users/:userId GET one user, PUT and DELETE by user's ID
router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

// http://localhost:3001/api/users/:userId/friends/:friendId POST and DELETE a friend by ID
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;