{ pkgs }: {
    deps = [
      pkgs.libev
      pkgs.pandoc
      pkgs.glibcLocales
      pkgs.gitFull
      pkgs.gnuplot
      pkgs.gd
      pkgs.ncurses.dev
    ];
}