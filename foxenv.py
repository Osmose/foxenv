import click
from click import echo


@click.group()
def main():
    pass


@main.command()
def install():
    echo('Install called')


if __name__ == '__main__':
    main()
