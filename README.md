# Branch Naming Slugifier

GitFlow-like branch naming slugify for lazy people

## Installing

`npm i -g branch-slug`

## Usage

```sh
$ bslug feature [ABC-123] Create that awesome feature

## "feature/abc-123-create-that-awesome-feature" copied to clipboard

```

## Options

### Include `new branch` command (-b)

```sh
$ bslug feature [ABC-123] Create that awesome feature -b

## "git branch -m feature/abc-123-create-that-awesome-feature" copied to clipboard

```

### Don't copy to clipboard (-c)

```sh
$ bslug feature [ABC-123] Create that awesome feature -c

## feature/abc-123-create-that-awesome-feature

```

### Don't include type (-t)

```sh
$ bslug [ABC-123] Create that awesome feature -t

## "abc-123-create-that-awesome-feature" copied to clipboard

```





