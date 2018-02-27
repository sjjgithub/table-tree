var tree= [
        {
            "libraryId": 1,
            "libraryName": "一级",
            "libraryTask": [
                {
                    "id": 5,
                    "projectId": 334,
                    "name": "任务5",
                    "code": "code",
                    "leader": 1,
                    "partner": "2,3",
                    "priority": 1,
                    "deadline": 1518087788000,
                    "state": "执行中",
                    "libraryId": 1
                }
            ],
            "childrenLibrary": [
                {
                    "libraryId": 2,
                    "libraryName": "一级_一级",
                    "parentLibraryId": 1,
                    "libraryTask": [
                        {
                            "id": 1,
                            "projectId": 334,
                            "name": "任务1",
                            "code": "code",
                            "leader": 1,
                            "partner": "2,3",
                            "priority": 2,
                            "deadline": 1518087788000,
                            "state": "执行中",
                            "libraryId": 2
                        },
                        {
                            "id": 2,
                            "projectId": 334,
                            "name": "任务2",
                            "code": "code",
                            "leader": 1,
                            "partner": "3",
                            "priority": 3,
                            "deadline": 1518087837000,
                            "state": "执行中",
                            "libraryId": 2
                        }
                    ]
                },
                {
                    "libraryId": 3,
                    "libraryName": "一级_二级",
                    "parentLibraryId": 1,
                    "libraryTask": [
                        {
                            "id": 6,
                            "projectId": 334,
                            "name": "任务6",
                            "code": "code",
                            "leader": 1,
                            "partner": "3",
                            "priority": 1,
                            "deadline": 1518087837000,
                            "state": "执行中",
                            "libraryId": 3
                        },
                        {
                            "id": 8,
                            "projectId": 334,
                            "name": "任务8",
                            "code": "code",
                            "leader": 1,
                            "partner": "3",
                            "priority": 1,
                            "deadline": 1518087837000,
                            "state": "执行中",
                            "libraryId": 3
                        }
                    ]
                }
            ]
        },
        {
            "libraryId": 4,
            "libraryName": "二级",
            "libraryTask": [
                {
                    "id": 3,
                    "projectId": 334,
                    "name": "任务3",
                    "code": "code",
                    "leader": 1,
                    "partner": "2,3",
                    "priority": 1,
                    "deadline": 1518087788000,
                    "state": "执行中",
                    "libraryId": 4
                },
                {
                    "id": 7,
                    "projectId": 334,
                    "name": "任务7",
                    "code": "code",
                    "leader": 1,
                    "partner": "2,3",
                    "priority": 1,
                    "deadline": 1518087788000,
                    "state": "执行中",
                    "libraryId": 4
                }
            ],
            "childrenLibrary": [
                {
                    "libraryId": 5,
                    "libraryName": "二级_一级",
                    "parentLibraryId": 4,
                    "libraryTask": [
                        {
                            "id": 4,
                            "projectId": 334,
                            "name": "任务4",
                            "code": "code",
                            "leader": 1,
                            "partner": "3",
                            "priority": 1,
                            "deadline": 1518087837000,
                            "state": "执行中",
                            "libraryId": 5
                        }
                    ]
                }
            ]
        }
    ]
