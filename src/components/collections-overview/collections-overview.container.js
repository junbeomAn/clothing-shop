import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from 'redux';

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "./../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";


const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner  
)(CollectionsOverview);

export default CollectionsOverviewContainer
// compose all those HOC from right to left --> bottom to top.
// ex) connect(mapStateToProps)(WithSpinner(CollectionsOverview))