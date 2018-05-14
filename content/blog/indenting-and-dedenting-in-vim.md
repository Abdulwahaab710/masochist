---
title: Indenting and dedenting in Vim
tags: vim blog
cache_breaker: 1
---

I frequently indent or dedent text in [Vim](/wiki/Vim) with `>` or `<`. This works in both normal and visual/select modes.

In conjunction with this, I often use `.` to repeat the indent (if I have a few levels of indenting to change, it feels easier to just tap `.` a few times and stop when you're at the right place, rather than trying to guess the number of jumps required and type something like `4<`).

I was browsing the [Vim](/wiki/Vim) sub-reddit and saw some neat mappings in [this thread](http://www.reddit.com/r/vim/comments/3458px/junegunns_1500line_vimrc_more_good_ideas_than_ill/cqrngbl), specifically:

    xnoremap < <gv
    xnoremap > >gv

These allow you to just mash the `>` or `<` keys repeatedly, because they maintain the visual selection after each move with `gv`.

I considered playing with these because sometimes with my use of `.` I end up going to far, and then having to reselect (`gv`) and apply the inverse operation (`>` for an excess `<`, or `>` for an excess `<`). On taking them for a spin, I noticed that the native `.` is broken, because it is effectively repeating only the last part of the mapping and not the entire thing. I'd like to preserve the functionality of `.` here, because muscle memory is a powerful thing and I've been doing this for years now.

Tim Pope's [vim-repeat](http://vimcasts.org/episodes/creating-repeatable-mappings-with-repeat-vim/) to the rescue? Alas no. I started with a set-up like this:

    xnoremap <silent> <Plug>DedentAndReselect <gv
          \ :silent! call repeat#set("\<Plug>DedentAndReselect")<CR>
    xmap < <Plug>DedentAndReselect

Entering command mode here ends up taking us out of visual mode.

Next attempt; note that I keep the `gv` in the initial part of the mapping, so that it will still (kind of) work if vim-repeat is not installed:

    xnoremap <silent> <Plug>DedentAndReselect >gv
          \ :silent! call repeat#set("\<Plug>IndentAndReselect")<CR>gv
    xmap > <Plug>DedentAndReselect

This does indeed reselect the text, but it doesn't repeat the dedent.

Final try:

    xnoremap <silent> <Plug>DedentAndReselect <gv
          \ :silent! call repeat#set("\<Plug>DedentAndReselect \<Bar> normal gv")<CR>
    xmap < <Plug>DedentAndReselect

This is the hackiest of all, trying to funnel extra keypresses through vim-repeat to achieve our ends. Alas, this doesn't work either. I tried a few variations on this but none worked.

In the end, on revisiting the Reddit comment thread, I realized what I'd been missing all along. I can undo overshot dedents or indents with `u`, which is native, unconfigured Vim, with no reliance on external plug-ins.