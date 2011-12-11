---
tags: ruby.debug updates
cache_breaker: 1
---

## Building

I actually had to try a few times before this worked:

    $ sudo gem install ruby-debug
    Bulk updating Gem source index for: http://gems.rubyforge.org/
    ERROR:  While executing gem ... (Gem::RemoteFetcher::FetchError)
        Gem::RemoteFetcher::FetchError: bad response Not Found 404 reading http://gems.rubyforge.org/gems/linecache-0.4.gem
    $ sudo gem install ruby-debug
    ERROR:  While executing gem ... (Gem::RemoteFetcher::FetchError)
        Gem::RemoteFetcher::FetchError: bad response Not Found 404 reading http://gems.rubyforge.org/gems/linecache-0.4.gem
    $ sudo gem install ruby-debug
    Updating metadata for 1 gems from http://gems.rubyforge.org/
    .
    complete
    Building native extensions.  This could take a while...
    Successfully installed linecache-0.4
    Successfully installed ruby-debug-base-0.10.1
    Successfully installed ruby-debug-0.10.1
    3 gems installed
    Installing ri documentation for linecache-0.4...
    Installing ri documentation for ruby-debug-base-0.10.1...
    Installing ri documentation for ruby-debug-0.10.1...
    Installing RDoc documentation for linecache-0.4...
    Installing RDoc documentation for ruby-debug-base-0.10.1...
    Installing RDoc documentation for ruby-debug-0.10.1...

## Updating the [FastRI](/wiki/FastRI) index

    $ fastri-server -b
    Building index.
    Indexed:
    * 7733 methods
    * 1368 classes/modules
    Needed 1.733149 seconds

## See also

-   Official release notes: <http://rubyforge.org/frs/shownotes.php?release_id=21031>
