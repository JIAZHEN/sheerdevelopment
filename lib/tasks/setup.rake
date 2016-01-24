CONFIG_FILES = FileList["config/*.yml.example"].ext("")

desc "Initialize .yml files from examples"
task bootstrap: CONFIG_FILES

rule ".yml" => ".yml.example" do |task|
  cp task.source, task.name
end
