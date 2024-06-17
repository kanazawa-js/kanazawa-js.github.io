const connpass = require("./connpassData.json");

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  connpass.events.forEach((event) => {
    const nodeContent = JSON.stringify(event);
    const nodeMeta = {
      id: createNodeId(`ConnpassEvent-${event.event_Id}`),
      parent: null,
      children: [],
      internal: {
        type: `ConnpassEvent`,
        mediaType: `text/html`,
        content: nodeContent,
        contentDigest: createContentDigest(event),
      },
    };
    const node = Object.assign({}, event, nodeMeta);
    actions.createNode(node);
  });
};
