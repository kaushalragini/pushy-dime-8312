import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";

import React from "react";

export default function RangeSliderComp() {
  return (
    <>
      <RangeSlider aria-label={["min", "max"]} defaultValue={[10, 30]}>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </>
  );
}
