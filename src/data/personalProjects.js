const personalProjects = [
  {
    id: "syncmp3-server",
    name: "SyncMP3 (server)",
    description:
      "The end goal of this program is that a user can download an mp3 file on one device and then that file is automatically synced between all other devices connected to that user's custom \"network\".",
    github: "https://github.com/Erik-Backdahl/SyncMP3-Server",
    stack: [
      { name: "C#", logo: "images/Csharp_logo.png" },
      { name: "VS Code", logo: "images/vsc_logo.png" },
      { name: "Git", logo: "images/git_logo.png" },
      { name: "GitHub", logo: "images/github_logo.png" },
      { name: "SSMS/SQL Server", logo: "images/ssms_21.png" },
      { name: "EF Core", logo: "images/ef-core-featured.png" },
    ],
  },
  {
    id: "syncmp3-app",
    name: "SyncMP3 (app)",
    description:
      "This app works as an mp3 player. But the important part is how it interacts with the server and automatically requests new songs and alerts the server when a new file is detected.",
    github: "https://github.com/Erik-Backdahl/SyncMP3App",
    stack: [
      { name: "C#", logo: "images/Csharp_logo.png" },
      { name: "VS Code", logo: "images/vsc_logo.png" },
      { name: "Git", logo: "images/git_logo.png" },
      { name: "GitHub", logo: "images/github_logo.png" },
      { name: "Avalonia", logo: "images/256px-Avalonia_logo.png" },
      { name: "MVVM", logo: "images/mvvm_logo.png" },
      { name: "SQLite", logo: "images/sqlite_logo.png" },
      { name: "EF Core", logo: "images/ef-core-featured.png" },
    ],
  },
];

export default personalProjects;
