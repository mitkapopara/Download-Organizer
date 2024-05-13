# Download-Organizer
Python script which organizes downloaded files into specific folders based on their file types.

Download Organizer is a Python script that uses the watchdog library to automatically sort downloaded files into designated folders based on their file types. This tool helps maintain an organized downloads directory by immediately moving new files to their appropriate locations.


Features:
Real-Time File Monitoring: Monitors changes in the downloads folder, sorting new files by type.

Automated File Sorting: Moves files into categorized folders such as Images, Videos, Documents, Apps, and more.

Duplicate Handling: Automatically renames files to prevent overwriting in the destination folder.


Functionality:
The script sets up a watchdog observer on the downloads folder.

When a file is added, it checks the file's extension, determines the correct folder based on predefined mappings in the FILE_TYPES dictionary, and moves the file there.

If the destination file already exists, the unique_filename method modifies the filename to ensure it is unique, avoiding overwrites.

Setup and Usage:
Install Python and watchdog using pip install watchdog.

Run the script with python path_to_script.py.

Files downloaded during the script’s runtime are automatically organized.
This script is ideal for users frequently managing large numbers of files, ensuring their workspace remains organized without manual intervention.
