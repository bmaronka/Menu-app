class App extends React.Component {
    state = {
        items: [
            { id: 1, name: 'tea', active: true, },
            { id: 2, name: 'potatoes', active: false, },
            { id: 3, name: 'groats', active: false, },
            { id: 4, name: 'soup', active: false, },
            { id: 5, name: 'boiling water', active: false, },
            { id: 6, name: 'bread', active: true, },
        ]
    }

    handleChangeStatus = (id) => {
        const items = this.state.items.map(item => {
            if (id === item.id) {
                item.active = !item.active;
            }
            return item;
        })

        this.setState({
            items
        })
    }

    render() {
        const items = this.state.items;

        return (
            <>
                <Header items={items} />
                <ListItems items={items} changeStatus={this.handleChangeStatus} />
            </>
        );
    }
}