# GesNext Payslip CLI

GesNext Payslip CLI is a command line tool written in Node to download payslips from the [GesNext](http://www.gesnext.com) employee portal. The portal is an old, slow and not-so-nice website used by [Telefónica](https://www.telefonica.com) and presumably other companies mainly to allow employees to download their payslips in PDF format. Thanks to this tool you might never have to look at it again.

## Installation

You need Node.js to run this tool. Please go to the [official website](https://nodejs.org) for installation instructions.

Then to install the tool itself:

```
npm install -g gesnext-payslip-cli
```

## Usage

```
Usage: payslip [options]

Options:

  -d, --domain <url>         URL of the portal
  -u, --user <user>          User
  -p, --password <password>  Password
  -m, --months [number]      Months back (defaults to last payslip)
  -h, --help                 output usage information
```

This will download the payslip PDF file to your current folder. If you don't want to manually run this command every time, you could for example set up a [cron job](https://en.wikipedia.org/wiki/Cron) to do it for you once a month.
