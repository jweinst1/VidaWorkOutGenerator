/**
 * Created by Josh on 1/28/17.
 */

//contains the names of different exercise groups

    //randomly picks an element from an array
let rand_pick = (arr) => {return arr[Math.floor((Math.random() * arr.length-1) + 1)];};

    //selects the amounts of reps for a set
    let reps_pick = () => {
        return rand_pick([8, 9, 10, 11, 12, 13]);
    };

let muscle_groups = [
        "Abs",
        "Lats",
        "Biceps",
        "Quads",
        "Glutes",
    ];
    //creates a set of 3 muscle groups to pick exercises from
let pick_muscle_groups = () => {
        let group_set = {};
        let count = 0;
        while(count < 4) {
            let picked_group = rand_pick(muscle_groups);
            if(!(picked_group in group_set)){
                group_set[picked_group] = true;
                count++;
            }
        }
        return group_set;
    };
    //large list of exercise fields
let muscle_exercises = {
        "Chest":[],
        "Abs":[
            {
                link:'http://www.bodybuilding.com/exercises/detail/view/name/ab-roller',
                name:'Ab Roller'
            },
            {
                link:'http://www.bodybuilding.com/exercises/detail/view/name/ab-crunch-machine',
                name:'Ab Crunch Machine'
            },
            {
                link:'http://www.bodybuilding.com/exercises/detail/view/name/air-bike',
                name:'Air Bike'
            },
            {
                link:'http://www.bodybuilding.com/exercises/detail/view/name/alternate-heel-touchers',
                name:'Alternate Heel Touchers'
            },
            {
                link:'http://www.bodybuilding.com/exercises/detail/view/name/bottoms-up',
                name:'Bottoms Up'
            },
            {
                link:'http://www.bodybuilding.com/exercises/detail/view/name/bosu-ball-crunch',
                name:'Bosu Ball Crunch'
            },
            ],
        "Lats":[
            {
                link:'http://www.bodybuilding.com/exercises/detail/view/name/assisted-chin-up',
                name:'Assisted Chin-UP'
            },
            {
                link:'http://www.bodybuilding.com/exercises/detail/view/name/catch-and-overhead-throw',
                name:'Catch and Overhead Throw'
            },
            {
                link:'http://www.bodybuilding.com/exercises/detail/view/name/close-grip-front-late-pulldown',
                name:'Close-Grip Front Lat PullDown'
            }
        ],
        "Neck":[],
        "Biceps":[
            {
                link:'http://www.bodybuilding.com/exercises/detail/view/name/alternate-hammer-curl',
                name:'Alternate Hammer Curl'
            },
            {
                link:'http://www.bodybuilding.com/exercises/detail/view/name/biceps-curl-to-shoulder-press',
                name:'Biceps Curl to Shoulder Press'
            },
            {
                link:'http://www.bodybuilding.com/exercises/detail/view/name/concentration-curls',
                name:'Concentration Curls'
            },
            {
                link:'http://www.bodybuilding.com/exercises/detail/view/name/cross-body-hammer-curl',
                name:'Cross Body Hammer Curl'
            }
        ],
        "Forearms":[],
        "Traps":[],
        "Lower Back":[],
        "Calves":[],
        "Quads":[
            {
                link:'http://www.bodybuilding.com/exercises/detail/view/name/dumbbell-front-squat',
                name:'Dumbbell Front Squat'
            },
            {
                link:'http://www.bodybuilding.com/exercises/detail/view/name/dumbbell-overhead-squat',
                name:'Dumbbell Overhead Squat'
            }
        ],
        "Glutes":[
            {
                link:'http://www.bodybuilding.com/exercises/detail/view/name/butt-lift-bridge',
                name:'Butt Lift (Bridge)'
            },
            {
                link:'http://www.bodybuilding.com/exercises/detail/view/name/flutter-kicks',
                name:'Flutter Kicks'
            },
            {
                link:'http://www.bodybuilding.com/exercises/detail/view/name/glute-kickback',
                name:'Glute KickBack'
            }
        ],
        "Triceps":[],
        "Shoulders":[],
        "Hamstrings":[]
    };

let create_exercise_elem = (group_name) => {
        let chosen = rand_pick(muscle_exercises[group_name]);
        return `<h3>${chosen.name}</h3><p>Do ${reps_pick()} of this exercise.</p><p><iframe src="${chosen.link}" height="200" width="300"></iframe></p>`;
};

document.write("<h1>Vida's Workout Plan</h1>");
document.write(`<p>This workout was created on ${new Date().toDateString()}</p>`);
document.write("<h2>Exercise List</h2>");

const chosen_groups = pick_muscle_groups();
for(let group in chosen_groups){
    document.write(create_exercise_elem(group));
}

document.write("Written and created by Josh Weinstein");




