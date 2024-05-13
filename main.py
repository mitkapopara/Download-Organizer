import os
import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

class DownloadOrganizer(FileSystemEventHandler):
    FILE_TYPES = {
        '.jpg': 'Images',
        '.jpeg': 'Images',
        '.png': 'Images',
        '.gif': 'Images',
        '.mp4': 'Videos',
        '.mov': 'Videos',
        '.avi': 'Videos',
        '.pdf': 'Documents',
        '.docx': 'Documents',
        '.svg': 'Documents',
        '.xls': 'Documents',
        '.xlsx': 'Documents',
        '.ppt': 'Documents',
        '.pptx': 'Documents',
        '.txt': 'Documents',
        '.csv': 'Documents',
        '.exe': 'Apps',
        '.msi': 'Apps',
        '.apk': 'Apps',
        '.app': 'Apps',
        '.dmg': 'Apps',
        '.pkg': 'Apps',
        '.zip': 'Zip',
        '.rar': 'Clutter',
        '.7z': 'Clutter',
        '.tar': 'Clutter',
        '.gz': 'Clutter',
        '.bz2': 'Clutter',

    }
    def on_modified(self, event):
        for filename in os.listdir(folder_to_track):
            src = f"{folder_to_track}/{filename}"
            extension = os.path.splitext(src)[1].lower()
            if extension in self.FILE_TYPES:
                destination_dir = f"{folder_destination}/{self.FILE_TYPES[extension]}"
                if not os.path.exists(destination_dir):
                    os.makedirs(destination_dir)
                new_filename = self.unique_filename(destination_dir, filename)
                new_destination = os.path.join(destination_dir, new_filename)
                os.rename(src, new_destination)
                print(f"Moved: {filename} to {new_destination}")

    def unique_filename(self, destination, filename):
        base, extension = os.path.splitext(filename)
        counter = 1
        new_filename = filename

        while os.path.exists(os.path.join(destination, new_filename)):
            new_filename = f"{base}_{counter}{extension}"
            counter += 1

        return new_filename

folder_to_track = '../../../Downloads'
folder_destination = '../../../Downloads/'
event_handler = DownloadOrganizer()
observer = Observer()
observer.schedule(event_handler, folder_to_track, recursive=True)
observer.start()

try:
    while True:
        time.sleep(10)
except KeyboardInterrupt:
    observer.stop()
observer.join()
