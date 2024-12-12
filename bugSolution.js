To fix this, ensure each item in your data array has a unique key.  Here's the corrected code:

```javascript
<FlatList
  data={[{id:1, name: 'Item 1'}, {id:2, name: 'Item 2'}, {id:3, name: 'Item 3'}]}
  renderItem={({item}) => <Text>{item.name}</Text>}
  keyExtractor={(item) => item.id} 
/>
```

Now each item has a unique `id`, and the FlatList will render correctly. If you don't have a unique identifier in your data, you can generate one: 

```javascript
<FlatList
  data={[{name: 'Item 1'}, {name: 'Item 2'}, {name: 'Item 3'}]}
  renderItem={({item}) => <Text>{item.name}</Text>}
  keyExtractor={(item, index) => index.toString()} 
/>
```

This uses the index as a key, but it's less ideal as keys should ideally be tied to the data itself for better performance and predictability.  For larger lists, always use a unique stable identifier from your data model if at all possible.