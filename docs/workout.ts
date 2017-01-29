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
                img:'http://www.bodybuilding.com/exercises/exerciseImages/sequences/110/Male/m/110_2.jpg',
                name:'Ab Roller'
            },
            {
                img:'http://www.bodybuilding.com/exercises/exerciseImages/sequences/225/Male/m/225_2.jpg',
                name:'Ab Crunch Machine'
            },
            {
                img:'http://www.bodybuilding.com/exercises/exerciseImages/sequences/209/Male/m/209_2.jpg',
                name:'Air Bike'
            },
            {
                img:'http://www.bodybuilding.com/exercises/exerciseImages/sequences/105/Male/m/105_1.jpg',
                name:'Alternate Heel Touchers'
            },
            {
                img:'http://www.bodybuilding.com/exercises/exerciseImages/sequences/2021/Male/m/2021_2.jpg',
                name:'Bottoms Up'
            },
            {
                img:'http://www.bodybuilding.com/exercises/exerciseImages/sequences/3981/Male/m/3981_1.jpg',
                name:'Bosu Ball Crunch'
            },
            ],
        "Lats":[
            {
                img:'http://www.bodybuilding.com/exercises/exerciseImages/sequences/4381/Male/m/4381_2.jpg',
                name:'Assisted Chin-UP'
            },
            {
                img:'http://www.bodybuilding.com/exercises/exerciseImages/sequences/768/Male/m/768_2.jpg',
                name:'Catch and Overhead Throw'
            },
            {
                img:'http://www.bodybuilding.com/exercises/exerciseImages/sequences/14/Male/m/14_1.jpg',
                name:'Close-Grip Front Lat PullDown'
            }
        ],
        "Neck":[],
        "Biceps":[
            {
                img:'http://www.bodybuilding.com/exercises/exerciseImages/sequences/158/Male/m/158_2.jpg',
                name:'Alternate Hammer Curl'
            },
            {
                img:'http://www.bodybuilding.com/exercises/exerciseImages/sequences/4101/Male/m/4101_2.jpg',
                name:'Biceps Curl to Shoulder Press'
            },
            {
                img:'http://www.bodybuilding.com/exercises/exerciseImages/sequences/136/Male/m/136_1.jpg',
                name:'Concentration Curls'
            },
            {
                img:'http://www.bodybuilding.com/exercises/exerciseImages/sequences/236/Male/m/236_2.jpg',
                name:'Cross Body Hammer Curl'
            }
        ],
        "Forearms":[],
        "Traps":[],
        "Lower Back":[],
        "Calves":[],
        "Quads":[
            {
                img:'http://www.bodybuilding.com/exercises/exerciseImages/sequences/4831/Male/m/4831_2.jpg',
                name:'Dumbbell Front Squat'
            },
            {
                img:'http://www.bodybuilding.com/exercises/exerciseImages/sequences/4461/Male/m/4461_2.jpg',
                name:'BodyWeight Lunge'
            }
        ],
        "Glutes":[
            {
                img:'http://www.bodybuilding.com/exercises/exerciseImages/sequences/99/Male/m/99_2.jpg',
                name:'Butt Lift (Bridge)'
            },
            {
                img:'http://www.bodybuilding.com/exercises/exerciseImages/sequences/267/Male/m/267_2.jpg',
                name:'Flutter Kicks'
            },
            {
                img:'http://www.bodybuilding.com/exercises/exerciseImages/sequences/98/Male/m/98_2.jpg',
                name:'Glute KickBack'
            }
        ],
        "Triceps":[],
        "Shoulders":[],
        "Hamstrings":[]
    };

let create_exercise_elem = (group_name) => {
        let chosen = rand_pick(muscle_exercises[group_name]);
        return `<h3>${chosen.name}</h3><p>Do ${reps_pick()} and 3 sets of this exercise.</p><p><embed src="${chosen.img}" height="200" width="300"></embed></p>`;
};

document.write("<h1>Vida's Workout Plan</h1>");
document.write(`<p>This workout was created on ${new Date().toDateString()}</p>`);
document.write("<h2>Exercise List</h2>");

const chosen_groups = pick_muscle_groups();
for(let group in chosen_groups){
    document.write(create_exercise_elem(group));
}

document.write("Written and created by Josh Weinstein");




