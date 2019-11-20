# Branch Naming Slugifier

GitFlow-like branch naming slugify for lazy people

## Installing

`npm i -g branch-slug`

## Usage:

```shell
$ bslug [options]
```

### Examples:

<pre>
$ bslug [ABC-123] Create that awesome feature -f

# Outputs
<b>Branch Slug:</b> <i>git branch -m feature/abc-123-create-that-awesome-feature</i> copied to clipboard
</pre>

* Don't include git command for new branch "git branch -m"
<pre>
$ bslug [ABC-321] Fix that nasty bug -i -g 

# Outputs
<b>Branch Slug:</b> <i>fix/abc-321-fix-that-nasty-bug</i> copied to clipboard
</pre>

* Don't copy to clipboard
<pre>
$ bslug [ABC-456] Improve our workflow -c -n 

# Outputs
<b>Branch Slug:</b> <i>git branch -m chore/abc-456-improve-our-workflow</i>
</pre>


## Options:

```shell
  -g, --no-git        Don't include git command for new branch git branch -m
  -n, --no-copy       Don't copy output to the clipboard
  -f, --type-feature  Branch type: feature. The output is feature/{description}
  -i, --type-fix      Branch type: fix. The output is fix/{description}
  -b, --type-bug      Branch type: bug. The output is bug/{description}
  -c, --type-chore    Branch type: chore. The output is chore/{description}
  -r, --type-release  Branch type: release. The output is release/{description}
  -t, --type <type>   Custom branch type. The output is {type}/{description}
  -h, --help          output usage information
```



