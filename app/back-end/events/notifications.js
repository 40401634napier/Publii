const ipcMain = require('electron').ipcMain;
const path = require('path');
const UpdatesHelper = require('../helpers/updates.helper.js');

/*
 * Events for the IPC communication regarding notifications
 */

class NotificationsEvents {
    constructor(appInstance) {
        // Save
        ipcMain.on('app-notifications-retrieve', function(event, downloadNotifications) {
            let updatesHelper = new UpdatesHelper({
                event: event,
                filePath: path.join(appInstance.appDir, 'logs', 'notifications-dev.json'),
                namespace: 'notifications',
                url: 'https://getpublii.com/notifications-dev.json',
                contentField: 'text',
                forceDownload: downloadNotifications
            });

            updatesHelper.retrieve();
        });
    }
}

module.exports = NotificationsEvents;
