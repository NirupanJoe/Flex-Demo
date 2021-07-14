const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const setFlexSelect = ({ data }) => ({
	select: data,
});

const actions = {
	increaseCount,
	setFlexSelect,
};

export default actions;
