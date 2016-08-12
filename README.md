# Foxenv - Firefox Installation Manager

Foxenv is a tool for managing multiple isolated installations of
Firefox. It is inspired by tools like [pyenv][] and [nvm][].

[pyenv]: https://github.com/yyuu/pyenv
[nvm]: https://github.com/creationix/nvm

## Usage

```sh
$ foxenv install 47.0.1
$ foxenv uninstall 43.0.2
$ foxenv shell 48.0
$ foxenv global 44.0
$ foxenv profile-create foobar [version]
$ foxenv profile-delete foobar
$ foxenv addon-install addon-name [version]
$ foxenv run [version] --profile=[profile-name]
$ foxenv run [version] --temp
$ foxenv run [version] --addons=foobar,biff,/path/to/addon.xpi
$ foxenv run [version] -- -P
$ foxenv ls
$ foxenv current
```

## License
Foxenv is licensed under the MIT License. See the `LICENSE` file for
details.
