var w = 500
var h = 110

function plot(svg, sw, hh, rect, rw, rh, x, y) {
    y1 = (h - y - rh)
    rect.attr("x",x)
    rect.attr("y",y1)
}

var svg = d3.select("body").append("svg")
svg.attr("width", w)
svg.attr("height", h)


rect1 = svg.append("rect")
rect1.attr("height",20)
rect1.attr("width",40)
rect1.attr("fill", "red")

plot(svg, w, h, rect1, 20, 40, 0, 0)

rect2 = svg.append("rect")
rect2.attr("height",20)
rect2.attr("width",40)
plot(svg, w, h, rect2, 20, 40, 0, 30)



rect11 = svg.append("rect")
rect11.attr("height",30)
rect11.attr("width",40)
rect11.attr("fill", "red")

plot(svg, w, h, rect11, 20, 40, 50, 0)

rect21 = svg.append("rect")
rect21.attr("height",40)
rect21.attr("width",40)
plot(svg, w, h, rect21, 20, 40, 50, 40)


// Given a range of reporting months {y1, m1}, {y2,m2} inclusive...
//$start_period = $this->FinStat->getStartPeriod();
//$stop_period  = $this->FinStat->getStopPeriod();

// 13- communication bank, ms
// 33- construction bank- sx
// 35- icbc x287
// 47- construction bank- tfr
// 49- postal bank
// 254- icbc x993
// 275- hua xia x643
// 293- bank of qingdao x169
//$results = $this->FinStat->doSQL("where distributions.account_id in (13, 33, 35, 47, 49, 254, 275, 293) ");
//$ydataBank = $this->FinStat->buildDatapoints($results, $start_period, $stop_period);

// 276- hua xia short term note
// 294- bank of qingdao short term not
//$results = $this->FinStat->doSQL("where distributions.account_id in (276,294) ");
//$ydataNote = $this->FinStat->buildDatapoints($results, $start_period, $stop_period);

// Now add the arrays together for the linear regression
//$xdata = $this->FinStat->getXData();

//$ydata = array();
//for ($i = 0; $i < count($xdata); $i++) {
//$n = 0;
//$n += $ydataBank[$i];
//$n += $ydataNote[$i];
//$ydata[] = $n;
//}

//App::uses('Fingraph', 'Lib');
//$theGraph = new Fingraph($xdata, $ydata, "Bank/Notes", 100000);
//$theGraph->init();

//$lineplotBank = $theGraph->addSeries($ydataBank, "Bank", "green");
//$lineplotBank = $theGraph->addSeries($ydataNote, "Note", "red");


//$theGraph->buildPlot();

// Display the graph
//$theGraph->graph->Stroke();

//?>


//public function getStartPeriod() {
//return array('year'=>2015, 'month'=>3);
//}

//public function getStopPeriod() {
//return array('year'=>2016, 'month'=>2);
//}

// The x-labels on the graph...
//public function getXData() {
//  3/2015 ----|
// begin ----| |
//           | |
//           | |                2/2016  -|
//return array(1,2,3,4,5,6,7,8,9,10,11,12,13/*,14,15,16,17,18,19,20,21,22,23,24,25,26*/);
//}


//function buildDatapoints($results, $start_period, $stop_period) {

//$ydata = array();

//$dp_report_range = $start_period;
//$dp_sql_result = array('year'=>$results[0][0]['year'], 'month'=>$results[0][0]['month']);
//$p_sql_result = 0;

// compute beginning balance, if any
//$running_balance = 0;
//while( $this->periodOf($dp_sql_result) < $this->periodOf($start_period) ) {
//$running_balance+= $results[$p_sql_result][0]['sum'];

// Now advance to the next sql entry.  If already at the end,
// Then set crazy high period to indicate
// Duplicate code!
//$rowcnt = count($results);
//if ($p_sql_result+1 >= $rowcnt) {
// Already at the end
//$dp_sql_result = array('year'=>2099, 'month'=>12);
//}	else {
// Not at the end. Advance to next row.
//$p_sql_result++;
//$dp_sql_result = array('year'=>$results[$p_sql_result][0]['year'], 'month'=>$results[$p_sql_result][0]['month']);
//}
//}

// Now save the $running_balance as the first ydata entry.  Maybe this is zero.
//$ydata[] = $running_balance;

// now stroll through the report range
// while p_sql <= p_report_range_stop {
//while( $this->periodOf($dp_report_range) <= $this->periodOf($stop_period)) {
//if( $this->periodOf($dp_report_range) == $this->periodOf($dp_sql_result) ) {
//$running_balance+= $results[$p_sql_result][0]['sum'];
//$ydata[] = $running_balance;
//$dp_report_range = $this->nextPeriod($dp_report_range);

// Now advance to the next sql entry.  If already at the end,
// Then set crazy high period to indicate
// Duplicate code!
//$rowcnt = count($results);
//if ($p_sql_result+1 >= $rowcnt) {
// Already at the end
//$dp_sql_result = array('year'=>2099, 'month'=>12);
//}	else {
// Not at the end. Advance to next row.
//$p_sql_result++;
//$dp_sql_result = array('year'=>$results[$p_sql_result][0]['year'], 'month'=>$results[$p_sql_result][0]['month']);
//}

//} else if( $this->periodOf($dp_report_range) < $this->periodOf($dp_sql_result)) {
//$ydata[] = $running_balance; // no activity in this period
//$dp_report_range = $this->nextPeriod($dp_report_range);
//} else { // dp_report_range must be > dp_sql_result
// This should be an error.  $dp_report_range should never
// be able to outrun $dp_sql_result
//$i = 5/0;
//}
//}
//return $ydata;
//}

//function startAtZeroForExpenses($ydata) {
//$n = $ydata[0];
//for ($i = 0; $i < count($ydata); $i++) {
//$ydata[$i] -= $n;
//}
//return $ydata;
//}

//function doSQL($where_clause) {
// |Date    |    Sum |
// |2011/05 | 100.00 |
// |2011/06 | 200.00 |
//$sql = "select " .
//" DATE_FORMAT(transactions.date, '%Y') as year, " .
//" DATE_FORMAT(transactions.date, '%m') as month, " .
//" sum(distributions.amount) as sum from distributions " .
//" left join transactions on distributions.transaction_id = transactions.id " .
//        $where_clause .
//" group by YEAR(transactions.date), MONTH(transactions.date) " .
//" order by year, month" ;

//$db = ConnectionManager::getDataSource('default');
//$results = $db->query($sql);
//return $results;
//}

//function periodOf($period) {
//return $period['year'] * 12 + $period['month'];
//}

//function nextPeriod($period) {
//$year  = $period['year'];
//$month = $period['month'];
//$month++;
//if ($month > 12) {
//$month = 1;
//$year++;
//}
//$period = array('year'=>$year, 'month'=>$month);
//return $period;
//}

//}

//?>
