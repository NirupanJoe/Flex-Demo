import { React } from 'react';
import context from '../core/context';

const Option = (select) => <option value={ select }>{select}</option>;

const FlexSelect = () =>
	<select
		value={ context.state.select }
		onChange={ (evt) => context.actions.setFlexSelect(evt.target.value) }
	>
		{context.config.selects.map(Option)}
	</select>;

export default FlexSelect;
