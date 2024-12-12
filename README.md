# React Native FlatList: Inconsistent Keys Cause Rendering Errors

This repository demonstrates a common error in React Native's FlatList component: using inconsistent or non-unique keys for list items. This can lead to various rendering issues, including incorrect item display and performance problems.

## The Problem

The `keyExtractor` prop in `FlatList` is crucial for efficient rendering and updates.  If keys are not unique or change unexpectedly between renders, FlatList may struggle to identify which items to update or remove. This can cause items to appear or disappear incorrectly, leading to a poor user experience. 

## The Solution

Ensure that your `keyExtractor` function always returns a unique, stable identifier for each item in your data array. Ideally, use a field from your data that is inherently unique (e.g., a database ID) or generate a unique key for each item if such a field doesn't exist.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npx react-native run-android` or `npx react-native run-ios`.
4. Observe the incorrect rendering of items in the FlatList due to duplicated keys.
5. Refer to `bugSolution.js` for a fixed implementation.