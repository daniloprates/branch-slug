# Branch Naming Slugifier

GitFlow-like branch naming slugify for lazy people

## Installing

`npm i -g branch-slug`

## Usage:

* bslug [options]

### Examples:

<pre>
$ bslug [ABC-123] Create that awesome feature -f

# Outputs
<b>Branch Slug:</b> <i>git branch -m feature/abc-123-create-that-awesome-feature</i> copied to clipboard
</pre>

* Don't include git command for new branch "git branch -m"
<pre>
$ bslug [ABC-123] Create that awesome feature -f -g 

# Outputs
<b>Branch Slug:</b> <i>feature/abc-123-create-that-awesome-feature</i> copied to clipboard
</pre>

* Don't copy to clipboard
<pre>
$ bslug [ABC-123] Create that awesome feature -f -c 

# Outputs
<b>Branch Slug:</b> <i>git branch -m feature/abc-123-create-that-awesome-feature</i>
</pre>


## Options:

```
  -g, --no-git        Don't include git command for new branch "git branch -m"
  -c, --no-copy       Don't copy output to the clipboard
  -t, --type <typet>  Branch type. The output is {type}/{description}
  -h, --help          output usage information
```

## Types:

`-t {type}`

```
  f or fe for feature
  fi for fix
  b for bug
  c for chore
  r for release
  or any other custom type e.g. special
```





