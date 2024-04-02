import React from "react";
import usePlacesAutocomplete, {
	getGeocode,
	getZipCode,
} from "use-places-autocomplete";
import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
const Places = ({ locationChange }) => {
	const {
		ready,
		value,
		suggestions: { status, data },
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({
		debounce: 300,
	});
	const handleInput = (e) => {
		setValue(e.target.value);
	};

	const handleSelect = async (address) => {
		setValue(address, false);
		clearSuggestions();
		try {
			const res = await getGeocode({ address });
			const zCode = getZipCode(res[0], false);
			locationChange(zCode);
		} catch (error) {
			console.log("😱 Error: ", error);
		}
	};
	const mapPin = "/pin.png";
	return (
		<div style={{ width: "100%" }}>
			<Combobox onSelect={handleSelect}>
				<ComboboxInput
					value={value}
					onChange={handleInput}
					disabled={!ready}
					className="place_input"
					placeholder="Search your place..."
					style={{
						width: "100%",
						height: "56px",
						padding: "10px",
						border: "1px solid lightgray",
						borderRadius: "0",
						backgroundImage: `url(${mapPin})`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: "10px 50%",
						backgroundSize: "20px",
						paddingLeft: "40px",
					}}
				/>
				<ComboboxPopover>
					<ComboboxList>
						{status === "OK" &&
							data.map(({ id, description }, index) => (
								<ComboboxOption key={index} value={description} />
							))}
					</ComboboxList>
				</ComboboxPopover>
			</Combobox>
		</div>
	);
};

export default Places;
