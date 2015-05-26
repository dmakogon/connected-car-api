var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function (req, res) {

    if(!req.params.id) {
        return res.send(400);
    }

    res.send(200, {
    'data': [
        {
            'type': 'vehicle',
            'name': '553ac59934dff597a9708c71',
            'id': '553ac59934dff597a9708c71',
            'is_active': true,
            'vin': '553ac59993884615b15b93d3',
            'make': 'Toyota',
            'model': 'Prius',
            'production_year': 2013,
            'mileage': '4,884.3',
            'links': {
                'self': 'http://localhost:3000/vehicles/553ac59934dff597a9708c71',
                'trips': {
                    'related': 'http://localhost:3000/trips/553ac59934dff597a9708c71',
                    'linkage': [
                        {
                            'type': 'trip',
                            'id': 'acf3ba91-8ee0-4b64-814a-52df6bdad442'
                        },
                        {
                            'type': 'trip',
                            'id': 'acf3ba91-8ee0-4b64-814a-52df6bdad443'
                        }
                    ]
                }
            }
        }
    ],
    'included': [
        {
            'id': 'acf3ba91-8ee0-4b64-814a-52df6bdad442',
            'type': 'trip',
            'trip_events': [
                {
                    'id': '553ac599cb49af5c772f9983',
                    'event_type': 'direction_change',
                    'type': 'event',
                    'timestamp': '2014-06-27T03:28:35 +07:00',
                    'speed': 8,
                    'location': {
                        'id': '13412',
                        'latitude': 56.649237,
                        'longitude': 136.74491,
                        'direction': 51,
                        'altitude': 681
                    }
                },
                {
                    'id': '553ac599685144ba00e7f8cd',
                    'event_type': 'engine_stop',
                    'type': 'event',
                    'timestamp': '2014-05-22T07:05:24 +07:00',
                    'speed': 3,
                    'location': {
                        'id': '13413',
                        'latitude': -21.687184,
                        'longitude': -77.175881,
                        'direction': 158,
                        'altitude': 9
                    }
                }
            ],
            'links': {
                'self': 'http://localhost:3000/vehicles/553ac59934dff597a9708c71/trip/acf3ba91-8ee0-4b64-814a-52df6bdad442',
                'driver': {
                    'related': 'http://localhost:3000/drivers/acf3ba91-8ee0-4b64-814a-52df6bdad442'
                }
            }
        },
        {
            'id': 'acf3ba91-8ee0-4b64-814a-52df6bdad443',
            'type': 'trip',
            'trip_events': [
                {
                    'id': '553ac599cb49af5c772f9982',
                    'event_type': 'direction_change',
                    'timestamp': '2014-06-27T03:28:35 +07:00',
                    'speed': 8,
                    'location': {
                        'id': '13414',
                        'latitude': 56.649237,
                        'longitude': 136.74491,
                        'direction': 51,
                        'altitude': 681
                    }
                },
                {
                    'id': '553ac599685144ba00e7f8cb',
                    'event_type': 'engine_stop',
                    'timestamp': '2014-05-22T07:05:24 +07:00',
                    'speed': 3,
                    'location': {
                        'id': '13415',
                        'latitude': -21.687184,
                        'longitude': -77.175881,
                        'direction': 158,
                        'altitude': 9
                    }
                }
            ],
            'links': {
                'self': 'http://localhost:3000/trips/acf3ba91-8ee0-4b64-814a-52df6bdad442',
                'driver': {
                    'related': 'http://localhost:3000/drivers/553ac59965094b476a817fa6'
                }
            }
        }
    ]
}
);
});


router.get('/', function (req, res) {
    
    res.send(200, {
    'data': [
        {
            'id': '553ac59934dff597a9708c71',
            'is_active': true,
            'links': {
                'self': 'http://localhost:3000/vehicles/553ac59934dff597a9708c71',
                'trips': {
                    'related': 'http://localhost:3000/trips/553ac59934dff597a9708c71'
                }
            },
            'make': 'Toyota',
            'mileage': '4,884.3',
            'model': 'Prius',
            'name': '553ac59934dff597a9708c71',
            'production_year': 2013,
            'type': 'vehicle',
            'vin': '553ac59993884615b15b93d3'
        }
    ]
});
});

router.get('/:id/trips', function (req, res) {

    if(!req.params.id) {
        return res.send(400);
    }
    
    res.send(200, {
    'data': [
        {
            'id': 'acf3ba91-8ee0-4b64-814a-52df6bdad442',
            'type': 'trip',
            'trip_events': [
                {
                    'id': '553ac599cb49af5c772f9983',
                    'event_type': 'direction_change',
                    'type': 'event',
                    'timestamp': '2014-06-27T03:28:35 +07:00',
                    'speed': 8,
                    'location': {
                        'id': '13412',
                        'latitude': 56.649237,
                        'longitude': 136.74491,
                        'direction': 51,
                        'altitude': 681
                    }
                },
                {
                    'id': '553ac599685144ba00e7f8cd',
                    'event_type': 'engine_stop',
                    'type': 'event',
                    'timestamp': '2014-05-22T07:05:24 +07:00',
                    'speed': 3,
                    'location': {
                        'id': '13413',
                        'latitude': -21.687184,
                        'longitude': -77.175881,
                        'direction': 158,
                        'altitude': 9
                    }
                }
            ],
            'links': {
                'self': 'http://localhost:3000/vehicles/553ac59934dff597a9708c71/trip/acf3ba91-8ee0-4b64-814a-52df6bdad442',
                'driver': {
                    'related': 'http://localhost:3000/drivers/acf3ba91-8ee0-4b64-814a-52df6bdad442'
                }
            }
        }
    ]
});
});

module.exports = router;