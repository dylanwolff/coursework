require_relative 'playable'
require_relative 'treasure_trove'

module StudioGame
  class Player
    include Playable

    attr_accessor :name
    attr_reader :health

    def initialize(name, health=100)
      @name = name.capitalize
      @health = health
      @found_treasures = Hash.new(0)
    end

    def self.from_csv(line)
      name, health = line.split(',')
      Player.new(name, Integer(health))
    end

    def to_csv
      "#{@name},#{@score}"
    end

    def each_found_treasure
      @found_treasures.each do |name, points|
        yield Treasure.new(name, points)
      end
    end

    def score
      @health + points
    end

    def points
      @found_treasures.values.reduce(0, :+)
    end

    def found_treasure(treasure)
      @found_treasures[treasure.name] += treasure.points
      puts "#{@name} found a #{treasure.name} worth #{treasure.points} points."
      puts "#{@name}'s treasures: #{@found_treasures}"
    end

    def <=>(other)
      other.score <=> score
    end

    def to_s
      "I'm #{@name} with health = #{@health}, points = #{points}, and score = #{score}."
    end
  end
end

if __FILE__ == $0
  player = Player.new("moe")
  puts player.name
  puts player.health
  player.w00t
  puts player.health
  player.blam
  puts player.health
end
