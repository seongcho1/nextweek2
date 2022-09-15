{ pkgs }: {
	deps = [
		pkgs.vimHugeX
  pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.nodePackages.yarn
        pkgs.replitPackages.jest
	];
}