import React from "react";
import { Blocks } from "@reactioncommerce/reaction-components";

/**
 * @summary Renders payment settings page
 * @param {Object} props Component props
 * @return {React.Node} React node
 */
export default function TaxSettingsRegion(props) {
  return (
    <Blocks region="TaxSettings" blockProps={props} />
  );
}
