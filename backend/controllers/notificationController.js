const db = require('../config/db');

// -- User notifications ----------------------------------
exports.getUserNotifications = async (req, res) => {
    try {
        const [notifications] = await db.query(
            "SELECT * FROM notifications WHERE recipient_type = 'user' AND recipient_id = ? ORDER BY created_at DESC",
            [req.user.id]
        );
        const unreadCount = notifications.filter(n => !n.is_read).length;
        res.status(200).json({ notifications, unreadCount });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notifications', error: 'Internal server error' });
    }
};

exports.markUserRead = async (req, res) => {
    try {
        await db.query(
            "UPDATE notifications SET is_read = 1 WHERE id = ? AND recipient_type = 'user' AND recipient_id = ?",
            [req.params.id, req.user.id]
        );
        res.status(200).json({ message: 'Marked as read.' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating notification', error: 'Internal server error' });
    }
};

exports.markUserAllRead = async (req, res) => {
    try {
        await db.query(
            "UPDATE notifications SET is_read = 1 WHERE recipient_type = 'user' AND recipient_id = ?",
            [req.user.id]
        );
        res.status(200).json({ message: 'All marked as read.' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating notifications', error: 'Internal server error' });
    }
};

// -- Admin notifications ---------------------------------
exports.getAdminNotifications = async (req, res) => {
    try {
        const [notifications] = await db.query(
            "SELECT * FROM notifications WHERE recipient_type = 'admin' AND recipient_id = ? ORDER BY created_at DESC",
            [req.admin.id]
        );
        const unreadCount = notifications.filter(n => !n.is_read).length;
        res.status(200).json({ notifications, unreadCount });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notifications', error: 'Internal server error' });
    }
};

exports.markAdminRead = async (req, res) => {
    try {
        await db.query(
            "UPDATE notifications SET is_read = 1 WHERE id = ? AND recipient_type = 'admin' AND recipient_id = ?",
            [req.params.id, req.admin.id]
        );
        res.status(200).json({ message: 'Marked as read.' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating notification', error: 'Internal server error' });
    }
};

exports.markAdminAllRead = async (req, res) => {
    try {
        await db.query(
            "UPDATE notifications SET is_read = 1 WHERE recipient_type = 'admin' AND recipient_id = ?",
            [req.admin.id]
        );
        res.status(200).json({ message: 'All marked as read.' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating notifications', error: 'Internal server error' });
    }
};
