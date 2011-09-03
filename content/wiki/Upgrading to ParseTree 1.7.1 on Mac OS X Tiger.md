---
tags: tiger parsetree updates
cache_breaker: 1
---

These notes were made while upgrading to the latest version of [ParseTree](/wiki/ParseTree), [ParseTree 1.7.1](/wiki/ParseTree_1.7.1), on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger).

# Installation

Via [RubyGems](/wiki/RubyGems):

    sudo gem install ParseTree

## Output

    Bulk updating Gem source index for: http://gems.rubyforge.org
    Successfully installed ParseTree-1.7.1
    Installing ri documentation for ParseTree-1.7.1...
    Installing RDoc documentation for ParseTree-1.7.1...

# Updating the [FastRI](/wiki/FastRI) index

    fastri-server -b

## Output

    Indexing RI docs for ParseTree version 1.7.1.
    Indexing RI docs for RubyInline version 3.6.3.
    Indexing RI docs for ZenTest version 3.6.0.
    Indexing RI docs for actionmailer version 1.3.3.
    Indexing RI docs for actionpack version 1.13.3.
    Indexing RI docs for actionwebservice version 1.2.3.
    Indexing RI docs for activerecord version 1.15.3.
    Indexing RI docs for activesupport version 1.4.2.
    Indexing RI docs for cmdparse version 2.0.2.
    Indexing RI docs for dhaka version 2.2.0.
    Indexing RI docs for diff-lcs version 1.1.2.
    Indexing RI docs for fastri version 0.3.0.1.
    Indexing RI docs for heckle version 1.4.1.
    Indexing RI docs for hoe version 1.2.1.
    Indexing RI docs for hpricot version 0.5.
    Indexing RI docs for meta_project version 0.4.15.
    Indexing RI docs for model_security_generator version 0.0.9.
    Indexing RI docs for rake version 0.7.3.
    Indexing RI docs for rcodetools version 0.5.0.0.
    Indexing RI docs for rcov version 0.8.0.2.
    Indexing RI docs for rspec version 1.0.5.
    Indexing RI docs for ruby-debug version 0.9.3.
    Indexing RI docs for ruby-debug-base version 0.9.3.
    Indexing RI docs for ruby-prof version 0.4.1.
    Indexing RI docs for ruby2ruby version 1.1.6.
    Indexing RI docs for rubyforge version 0.4.2.
    Indexing RI docs for rubygems version 0.9.2.
    Indexing RI docs for spec_ui version 0.2.3.
    Indexing RI docs for sqlite3-ruby version 1.2.1.
    Indexing RI docs for syntax version 1.0.0.
    Indexing RI docs for walrus version 0.1.
    Indexing RI docs for webgen version 0.4.4.
    Building index.
    Indexed:
    * 13179 methods
    * 2703 classes/modules
    Needed 1.608621 seconds

# Cleaning up old versions of installed [gems](/wiki/gems)

    sudo gem cleanup

## Output

    Cleaning up installed gems...
    Attempting uninstall on ParseTree-1.7.0
    Successfully uninstalled ParseTree version 1.7.0
    Clean Up Complete