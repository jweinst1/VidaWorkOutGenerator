/**
 * Created by Josh on 1/28/17.
 */
//contains the names of different exercise groups
//randomly picks an element from an array
var rand_pick = function (arr) { return arr[Math.floor((Math.random() * arr.length - 1) + 1)]; };
//selects the amounts of reps for a set
var reps_pick = function () {
    return rand_pick([8, 9, 10, 11, 12, 13]);
};
var muscle_groups = [
    "Abs",
    "Lats",
    "Biceps",
    "Quads",
    "Glutes",
];
//creates a set of 3 muscle groups to pick exercises from
var pick_muscle_groups = function () {
    var group_set = {};
    var count = 0;
    while (count < 4) {
        var picked_group = rand_pick(muscle_groups);
        if (!(picked_group in group_set)) {
            group_set[picked_group] = true;
            count++;
        }
    }
    return group_set;
};
//large list of exercise fields
var muscle_exercises = {
    "Chest": [],
    "Abs": [
        {
            link: 'http://www.bodybuilding.com/exercises/detail/view/name/ab-roller',
            name: 'Ab Roller'
        },
        {
            link: 'http://www.bodybuilding.com/exercises/detail/view/name/ab-crunch-machine',
            name: 'Ab Crunch Machine'
        },
        {
            link: 'http://www.bodybuilding.com/exercises/detail/view/name/air-bike',
            name: 'Air Bike'
        },
        {
            link: 'http://www.bodybuilding.com/exercises/detail/view/name/alternate-heel-touchers',
            name: 'Alternate Heel Touchers'
        },
        {
            link: 'http://www.bodybuilding.com/exercises/detail/view/name/bottoms-up',
            name: 'Bottoms Up'
        },
        {
            link: 'http://www.bodybuilding.com/exercises/detail/view/name/bosu-ball-crunch',
            name: 'Bosu Ball Crunch'
        },
    ],
    "Lats": [
        {
            link: 'http://www.bodybuilding.com/exercises/detail/view/name/assisted-chin-up',
            name: 'Assisted Chin-UP'
        },
        {
            link: 'http://www.bodybuilding.com/exercises/detail/view/name/catch-and-overhead-throw',
            name: 'Catch and Overhead Throw'
        },
        {
            link: 'http://www.bodybuilding.com/exercises/detail/view/name/close-grip-front-late-pulldown',
            name: 'Close-Grip Front Lat PullDown'
        }
    ],
    "Neck": [],
    "Biceps": [
        {
            link: 'http://www.bodybuilding.com/exercises/detail/view/name/alternate-hammer-curl',
            name: 'Alternate Hammer Curl'
        },
        {
            link: 'http://www.bodybuilding.com/exercises/detail/view/name/biceps-curl-to-shoulder-press',
            name: 'Biceps Curl to Shoulder Press'
        },
        {
            link: 'http://www.bodybuilding.com/exercises/detail/view/name/concentration-curls',
            name: 'Concentration Curls'
        },
        {
            link: 'http://www.bodybuilding.com/exercises/detail/view/name/cross-body-hammer-curl',
            name: 'Cross Body Hammer Curl'
        }
    ],
    "Forearms": [],
    "Traps": [],
    "Lower Back": [],
    "Calves": [],
    "Quads": [
        {
            link: 'http://www.bodybuilding.com/exercises/detail/view/name/dumbbell-front-squat',
            name: 'Dumbbell Front Squat'
        },
        {
            link: 'http://www.bodybuilding.com/exercises/detail/view/name/dumbbell-overhead-squat',
            name: 'Dumbbell Overhead Squat'
        }
    ],
    "Glutes": [
        {
            img: 'http://www.bodybuilding.com/exercises/exerciseImages/sequences/99/Male/m/99_2.jpg',
            name: 'Butt Lift (Bridge)'
        },
        {
            img: 'http://www.bodybuilding.com/exercises/exerciseImages/sequences/267/Male/m/267_2.jpg',
            name: 'Flutter Kicks'
        },
        {
            img: 'http://www.bodybuilding.com/exercises/exerciseImages/sequences/98/Male/m/98_2.jpg',
            name: 'Glute KickBack'
        }
    ],
    "Triceps": [],
    "Shoulders": [],
    "Hamstrings": []
};
var create_exercise_elem = function (group_name) {
    var chosen = rand_pick(muscle_exercises[group_name]);
    return "<h3>" + chosen.name + "</h3><p>Do " + reps_pick() + " of this exercise.</p><p><embed src=\"" + (chosen.img || chosen.link) + "\" height=\"200\" width=\"300\"></embed></p>";
};
document.write("<h1>Vida's Workout Plan</h1>");
document.write("<p>This workout was created on " + new Date().toDateString() + "</p>");
document.write("<h2>Exercise List</h2>");
var chosen_groups = pick_muscle_groups();
for (var group in chosen_groups) {
    document.write(create_exercise_elem(group));
}
document.write("Written and created by Josh Weinstein");
//# sourceMappingURL=workout.js.map