difference(){
    color([1,.7,0]) cylinder(h=5, r=10, center=true);
    cylinder(h=5.1, r=9, center=true, $fn=100);
}
color([1,.4,0]) text("λ", halign="center", valign="center", size=13);