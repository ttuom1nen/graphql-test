const graphql = require("graphql");
const _ = require("lodash");

// Dummy data
const usersData = [
  { id: "1", name: "Bond", age: 33, profession: "" },
  { id: "2", name: "Nannie", age: 18, profession: "" },
  { id: "3", name: "Nicholas", age: 65, profession: "" },
  { id: "4", name: "Elsie", age: 94, profession: "" },
  { id: "5", name: "Kyle", age: 28, profession: "" },
];

const hobbiesData = [
  { id: "233", title: "Lebanon", description: "" },
  { id: "35", title: "Tajikistan", description: "" },
  { id: "57", title: "Niue", description: "" },
  { id: "34", title: "South Sudan", description: "" },
];

const postsData = [
  {
    id: "233",
    comment:
      "card bank particles hunter bigger next adventure opinion active top split level castle member during condition cattle knife cook room guard sport did gray",
  },
  {
    id: "35",
    comment:
      "thread never planet catch husband kill plane dog gravity today wonder two audience sing child describe subject passage few done earlier western therefore pink",
  },
  {
    id: "57",
    comment:
      "pay height company central police but mathematics ball zero within warn have sum jack coach chemical range flow plane cowboy volume swung movement stream",
  },
  {
    id: "34",
    comment:
      "terrible heavy rate machine coach behind aloud medicine corner desk alone wooden roof pupil hope thrown born than student sum here chosen principle straw",
  },
];

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} = graphql;

// Create types
const UserType = new GraphQLObjectType({
  name: "User",
  description: "User desc",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    profession: { type: GraphQLString },
  }),
});

const HobbyType = new GraphQLObjectType({
  name: "Hoddy",
  description: "Hobby desc",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});

const PostType = new GraphQLObjectType({
  name: "Post",
  description: "Post desc",
  fields: () => ({
    id: { type: GraphQLID },
    comment: { type: GraphQLString },
  }),
});

// RootQuery
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  description: "Description",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },

      resolve(parent, args) {
        return _.find(usersData, { id: args.id });
      },
    },

    hobby: {
      type: HobbyType,
      args: { id: { type: GraphQLID } },

      resolve(parent, args) {
        return _.find(hobbiesData, { id: args.id });
      },
    },

    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },

      resolve(parent, args) {
        return _.find(postsData, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});