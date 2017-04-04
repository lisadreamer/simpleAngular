app.controller('MainController',
                ['$scope',function($scope){

    $scope.title = 'lisadreamer blog';

    $scope.products = [{ 
    name: 'Choose what you wanna do. Figure out what are you passioned about. And start your journey. Its great being a bit afraid! you can use its power to enjoy every moment', 
    pubdate: new Date('2014', '03', '08'), 
    cover: './img/follow_your_dreams.jpg',
    likes: 0 
    }, 
    { 
    name: 'Why we dream? Are our dreams trying to tell us smth? Could you fly in your dreams? or be a local hairdresser in small barbershop somewhere in France? all is possible in our dreams..', 
    pubdate: new Date('2013', '08', '01'), 
    cover: './img/dreaming.jpg' ,
    likes: 0
    },
    { 
    name: 'Stress. Heart beats faster, breathing becomes faster..New researches say stress is not dangerous if you believe in it. ', 
    pubdate: new Date('1999', '07', '08'), 
    cover: './img/stress.jpg',
    likes: 0 
  	}, 
  	{ 
    name: 'Day by day. My life is changing. good things coming into my life. and I appreciate it very much. still could you, time, not go so fast and stay a bit longer here.', 
    pubdate: new Date('2011', '08', '16'), 
    cover: './img/year.jpg' ,
    likes: 0
  	}
    ]; 	

    $scope.plusOne = function($index){
        $scope.products[$index].likes +=1;
    }
    
}]);