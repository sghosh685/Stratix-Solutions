{ pkgs }: {
  deps = [
    pkgs.npm init
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}