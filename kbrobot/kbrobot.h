#ifndef __KBROBOT_H__
#define __KBROBOT_H__

#include "driver.h"
#include "device.h"
#include "driver/gpio.h"
#include "driver/adc.h"
#include "esp_adc_cal.h"
#include "driver/ledc.h"


class KBRobot : public Device {
	private:


	public:
		// constructor
		KBRobot(void);
		
		// override
		void init(void);
		void process(Driver *drv);
		int prop_count(void);
		bool prop_name(int index, char *name);
		bool prop_unit(int index, char *unit);
		bool prop_attr(int index, char *attr);
		bool prop_read(int index, char *value);
		bool prop_write(int index, char *value);

		void ledcWrite(int pin,int duty);
		
		// method
		int digitalRead(int pin) ;
		void motorspeed(int pin,int _direction,int _speed);
		// Servo
		void servoSetAngle(int pin, int angle) ;		
};

#endif
