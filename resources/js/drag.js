function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.columnContainer.id);

      event
      .currentTarget
      .style
      .backgroundColor = 'yellow';
  }
