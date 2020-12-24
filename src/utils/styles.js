const appStyles = {
    defaultShadow: {
        boxShadow: "0 0 5px -2.75px black",
    },
    cardBorderRadius: {
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        flexShrink: 0
    },
    secondaryText: {
        color: '#aaa'
    },
    imageStyle: {
        height: "100%",
        width: '100%',
        borderRadius: 20,
        resizeMode: 'contain',
    },
    listHeader: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    spreadHorizontally: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    paddingHorizontal: (value) => ({
        paddingLeft: value,
        paddingRight: value
    }),
    paddingVertical: (value) => ({
        paddingTop: value,
        paddingBottom: value
    }),
    marginHorizontal: (value) => ({
        marginLeft: value,
        marginRight: value
    }),
    marginVertical: (value) => ({
        marginTop: value,
        marginBottom: value
    }),
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    card: {
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    grid: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 'initial'
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    cardSubtitle: {
        marginTop: 8,
        marginBottom: 8,
        fontSize: 14,
        fontWeight: '300'
    },
    rounded: size => ({
        width: size,
        height: size,
        borderRadius: size * 2
    })
}


export default appStyles
