import { SubscriptionManager } from 'graphql-subscriptions'
import schema from './schema'

const subscriptionManager = new SubscriptionManager({
  schema,
  setupFunctions: {
    countUpdated: () => ({
      // Run the query each time count updated
      countUpdated: () => true
    })
  },
});

export { subscriptionManager, pubsub };