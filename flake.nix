{
  description = "BitGoJS flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
    flake-compat = {
      url = "github:edolstra/flake-compat";
      flake = false;
    };
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    flake-compat,
  }: (
    flake-utils.lib.eachDefaultSystem (
      system: (
        let
          pkgs = nixpkgs.legacyPackages.${system};
        in {
          devShell = pkgs.mkShell {
            name = "BitGoJS shell";

            packages = with pkgs; [
              nodejs
              yarn
            ];

            shellHook = ''
              export PATH="$(pwd)/node_modules/.bin:$PATH"
            '';
          };
        }
      )
    )
  );
}
