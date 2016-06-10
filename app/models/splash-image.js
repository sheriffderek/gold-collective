// export { default } from 'ember-wordpress/models/post';


// import DS from 'ember-data';

// export default DS.Model.extend({
  
// });


import DS from 'ember-data';
import PostModel from "ember-wordpress/models/post";

export default PostModel.extend({
	better_featured_image: DS.attr(),
});
