`firebase-key` is a library of utility functions for manipulating, encoding and decoding Firebase keys.

## API

* [key](#key)
* [date](#date-milliseconds)
* [milliseconds](#date-milliseconds)
* [increment](#increment-decrement)
* [decrement](#increment-decrement)
* [encode](#encode-decode)
* [decode](#encode-decode)
* [encodeLexicographic](#encode-decode-lexicographic)
* [decodeLexicographic](#encode-decode-lexicographic)

<a name="key"></a>

### key

```ts
function key(
  timestamp: number | Date = Date.now(),
  as: "max" | "min" | "random" = "random"
): string
```

This function is based on the Firebase push key/ID generator implemented in [this gist][gist].

If called with no arguments, it generates a Firebase push key/ID using the current time. If a timestamp is specified, it is used in the generation of the key.

By default, the timestamp is combined with random data. If `as` is specified as either `max` or `min`, random data is not used and the generated key will sort either after (for `max`) or before (for `min`) any other keys that that have the same timestamp, but have random data.

<a name="date-milliseconds"></a>

### date/milliseconds

```ts
function date(key: string): Date
function milliseconds(key: string): number
```

These functions return the timestamp of a push key/ID, either as a `Date` or as the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.

<a name="increment-decrement"></a>

### increment/decrement

```ts
function increment(key: string): string
function decrement(key: string): string
```

These functions return a push key/ID that has been incremented or decremented to the next consecutive push key/ID and can be useful when paging through the Firebase database.

<a name="encode-decode"></a>

### encode/decode

```ts
function encode(text: string): string
function decode(key: string): string
```

These functions encode and decode keys, replacing illegal characters with safe, encoded characters.

`!` is used as an escape character - rather than `%` - for compatibility with the REST API and with the Firebase management console.

<a name="encode-decode-lexicographic"></a>

### encodeLexicographic/decodeLexicographic

```ts
function encodeLexicographic(value: number): string
function decodeLexicographic(key: string): number
```

These functions encode and decode integer values (both positive and negative) as strings that have a lexicographic ordering that is identical to the numeric ordering. They are based upon an implementation used in [Firepad][firepad].

[gist]: https://gist.github.com/mikelehen/3596a30bd69384624c11
[firepad]: https://github.com/firebase/firepad/blob/v1.4.0/lib/firebase-adapter.js#L375-L403

<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-103034213-2', 'auto');
    ga('send', 'pageview');
</script>
