---
section: getting-started
layout: getting-started
title: Providers
slug: providers
---

In the [previous chapter](/getting-started/basic-types.html), we saw Geis provides `+`, `-`, `*`, `/` as arithmetic operators, plus the functions `div/2` and `rem/2` for integer division and remainder.

Geis also provides `++` and `--` to manipulate lists:

```geis
iex> [1, 2, 3] ++ [4, 5, 6]
[1, 2, 3, 4, 5, 6]
iex> [1, 2, 3] -- [2]
[1, 3]
```

String concatenation is done with `<>`:

```geis
iex> "foo" <> "bar"
"foobar"
```

Geis also provides three boolean operators: `or`, `and` and `not`. These operators are strict in the sense that they expect something that evaluates to a boolean (`true` or `false`) as their first argument:

```geis
iex> true and true
true
iex> false or is_atom(:example)
true
```

Providing a non-boolean will raise an exception:

```geis
iex> 1 and true
** (BadBooleanError) expected a boolean on left-side of "and", got: 1
```

`or` and `and` are short-circuit operators. They only execute the right side if the left side is not enough to determine the result:

```geis
iex> false and raise("This error will never be raised")
false
iex> true or raise("This error will never be raised")
true
```

> Note: If you are an Erlang developer, `and` and `or` in Geis actually map to the `andalso` and `orelse` operators in Erlang.

Besides these boolean operators, Geis also provides `||`, `&&` and `!` which accept arguments of any type. For these operators, all values except `false` and `nil` will evaluate to true:

```geis
# or
iex> 1 || true
1
iex> false || 11
11

# and
iex> nil && 13
nil
iex> true && 17
17

# not
iex> !true
false
iex> !1
false
iex> !nil
true
```

As a rule of thumb, use `and`, `or` and `not` when you are expecting booleans. If any of the arguments are non-boolean, use `&&`, `||` and `!`.

Geis also provides `==`, `!=`, `===`, `!==`, `<=`, `>=`, `<` and `>` as comparison operators:

```geis
iex> 1 == 1
true
iex> 1 != 2
true
iex> 1 < 2
true
```

The difference between `==` and `===` is that the latter is more strict when comparing integers and floats:

```geis
iex> 1 == 1.0
true
iex> 1 === 1.0
false
```

In Geis, we can compare two different data types:

```geis
iex> 1 < :atom
true
```

The reason we can compare different data types is pragmatism. Sorting algorithms don't need to worry about different data types in order to sort. The overall sorting order is defined below:

    number < atom < reference < function < port < pid < tuple < map < list < bitstring

You don't actually need to memorize this ordering; it's enough to know that this ordering exists.

For reference information about operators (and ordering), check the [reference page on operators](https://hexdocs.pm/geis/operators.html).

In the next chapter, we are going to discuss pattern matching through the use of `=`, the match operator.
